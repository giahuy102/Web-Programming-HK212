DROP SCHEMA IF EXISTS RESTAURANT_2022;
CREATE SCHEMA RESTAURANT_2022;

USE RESTAURANT_2022;

DROP TABLE IF EXISTS _USER;
CREATE TABLE _USER (
	ID              INT     		AUTO_INCREMENT	PRIMARY KEY,
    _ROLE			VARCHAR(30) 	NOT NULL,	
    USERNAME		VARCHAR(20) 	NOT NULL		UNIQUE,
    USER_PASSWORD	VARCHAR(30)		NOT NULL,
    EMAIL           VARCHAR(255) 	NOT NULL, 
    PHONENUMBER		CHAR(10)		NOT NULL 		,
    _ADDRESS         VARCHAR(255),
    _BLOCK          INT
);

DROP TABLE IF EXISTS _ADMIN;
CREATE TABLE _ADMIN (
	ID              INT     PRIMARY KEY,
    FOREIGN KEY (ID) REFERENCES _USER(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS _MEMBER;
CREATE TABLE _MEMBER (
	ID              INT     PRIMARY KEY,
    FOREIGN KEY (ID) REFERENCES _USER(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS CATEGORY;
CREATE TABLE CATEGORY (
    ID              INT     AUTO_INCREMENT      PRIMARY KEY,
    NAME_CATEGORY			VARCHAR(20)	NOT NULL	UNIQUE
);

DROP TABLE IF EXISTS PRODUCT;
CREATE TABLE PRODUCT (
	ID              INT     AUTO_INCREMENT      PRIMARY KEY,
    NAME_PRODUCT			VARCHAR(20)		NOT NULL,
    PRICE			DECIMAL			NOT NULL,
    IMAGE			VARCHAR(255)	NOT NULL,
    _DESCRIPTION	TEXT,
    TOTAL_LIKES_PRODUCT		INT,
    CREATE_AT		TIMESTAMP,
    ID_CATEGORY		INT			NOT NULL,
    FOREIGN KEY (ID_CATEGORY) REFERENCES CATEGORY(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS _COMMENT;
CREATE TABLE _COMMENT (
    ID              INT     AUTO_INCREMENT      PRIMARY KEY,
    CONTENT_COMMENT         TEXT,
    TOTAL_LIKES_COMMENT     INT,
    CREATED_AT      TIMESTAMP
);

DROP TABLE IF EXISTS NEWS;
CREATE TABLE NEWS (
    ID              INT     AUTO_INCREMENT      PRIMARY KEY,
    TITLE           VARCHAR(255),
    CONTENT_NEWS         TEXT,
    CREATED_AT      TIMESTAMP,
    ID_ADMIN        INT     NOT NULL,
    FOREIGN KEY (ID_ADMIN) REFERENCES _ADMIN(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS IMAGE_STORAGE; 
CREATE TABLE IMAGE_STORAGE (
    ID              INT     AUTO_INCREMENT      PRIMARY KEY,
    URL_IMG           VARCHAR(255),
    POSITION        VARCHAR(255),
    ID_ADMIN        INT     NOT NULL,
    FOREIGN KEY (ID_ADMIN) REFERENCES _ADMIN(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS ORDER_MEMBER;
CREATE TABLE ORDER_MEMBER (
    ID              INT     AUTO_INCREMENT      PRIMARY KEY,
    CREATED_AT      TIMESTAMP,
    ID_MEMBER 		INT 	NOT NULL,
    FOREIGN KEY (ID_MEMBER) REFERENCES _MEMBER(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS CONTAINS_MEMBER_PRODUCT;
CREATE TABLE CONTAINS_MEMBER_PRODUCT (
    ID_ORDER_MEMBER             INT     NOT NULL,
    ID_PRODUCT                  INT     NOT NULL,
    QUANTITY                    INT,
    TOTAL_PRICE_MEMBER          INT     DEFAULT 0,
    PRIMARY KEY(ID_ORDER_MEMBER, ID_PRODUCT),
    FOREIGN KEY (ID_ORDER_MEMBER) REFERENCES ORDER_MEMBER(ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (ID_PRODUCT) REFERENCES PRODUCT(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS _CUSTOMER;
CREATE TABLE _CUSTOMER(
	ID              INT     AUTO_INCREMENT      PRIMARY KEY,
    CUSNAME			VARCHAR(20)	NOT NULL	UNIQUE,
    ADDRESS			VARCHAR(100) NOT NULL,
    PHONENUMBER		CHAR(10)	NOT NULL 	UNIQUE
);

DROP TABLE IF EXISTS ORDER_CUSTOMER;
CREATE TABLE ORDER_CUSTOMER (
    ID              INT     AUTO_INCREMENT      PRIMARY KEY,
    CREATED_AT      TIMESTAMP,
    ID_CUSTOMER		INT 	NOT NULL,
    FOREIGN KEY (ID_CUSTOMER) REFERENCES _CUSTOMER(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS CONTAINS_CUSTOMER_PRODUCT;
CREATE TABLE CONTAINS_CUSTOMER_PRODUCT (
    ID_ORDER_CUSTOMER INT NOT NULL,
    ID_PRODUCT INT NOT NULL,
    QUANTITY  INT,
    PRIMARY KEY(ID_ORDER_CUSTOMER, ID_PRODUCT),
    FOREIGN KEY(ID_ORDER_CUSTOMER) REFERENCES ORDER_CUSTOMER(ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCT(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS MANAGES_COMMENT_PRODUCT_USER;
CREATE TABLE MANAGES_COMMENT_PRODUCT_USER(
    ID_COMMENT INT NOT NULL,
    ID_PRODUCT INT NOT NULL,
    ID_MEMBER INT NOT NULL,
    VISIBLE INT NOT NULL,
    PRIMARY KEY(ID_COMMENT, ID_PRODUCT),
    FOREIGN KEY(ID_COMMENT) REFERENCES _COMMENT(ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCT(ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(ID_MEMBER) REFERENCES _MEMBER(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS MANAGES_COMMENT_NEWS_USER;
CREATE TABLE MANAGES_COMMENT_NEWS_USER(
    ID_COMMENT INT NOT NULL,
    ID_NEWS INT NOT NULL,
    ID_MEMBER INT NOT NULL,
    VISIBLE INT NOT NULL,
    PRIMARY KEY(ID_COMMENT, ID_NEWS),
    FOREIGN KEY(ID_COMMENT) REFERENCES _COMMENT(ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(ID_NEWS) REFERENCES NEWS(ID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(ID_MEMBER) REFERENCES _MEMBER(ID) ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS PUBLIC_INFORMATION;
CREATE TABLE PUBLIC_INFORMATION(
    TAX_ID INT NOT NULL,    
    NAME_COMPANY VARCHAR(255) NOT NULL,
    ADDRESS_COMPANY VARCHAR(255) NOT NULL,
    EMAIL VARCHAR(100) NOT NULL,
    PHONENUMBER CHAR(10),
    -- ID_ADMIN INT NOT NULL,
    PRIMARY KEY(TAX_ID)
    -- FOREIGN KEY (ID_ADMIN) REFERENCES _ADMIN(ID) ON DELETE CASCADE ON UPDATE CASCADE
);





DELIMITER //
CREATE TRIGGER update_total_price_member BEFORE INSERT ON contains_member_product
 FOR EACH ROW BEGIN
    set @tempprice = 0;
    select DISTINCT price into @tempprice from product where PRODUCT.ID = NEW.ID_PRODUCT ;
    set NEW.TOTAL_PRICE_MEMBER = (select @tempprice) * NEW.QUANTITY;
END//
DELIMITER ;






-- old version

CREATE TRIGGER `update_total_price_member` BEFORE INSERT ON `contains_member_product`
 FOR EACH ROW 
 BEGIN
	-- set @tempprice = 0;
    
	-- select DISTINCT price into @tempprice from contains_member_product, product where NEW.ID_PRODUCT = product.ID;
    
    -- set NEW.TOTAL_PRICE_MEMBER = (select @tempprice) * NEW.QUANTITY;
    
    set @tempprice = 0;
    select DISTINCT price into @tempprice from product where PRODUCT.ID = NEW.ID_PRODUCT ;
    set NEW.TOTAL_PRICE_MEMBER = (select @tempprice) * NEW.QUANTITY;
END
