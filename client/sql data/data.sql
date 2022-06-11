USE RESTAURANT_2022;

INSERT INTO _user VALUES (1, 'member', 'Nhan Vo', 'password', 'nhanvohmd1@gmail.com', '0919074981', 'Kien Giang', 0);
INSERT INTO _user VALUES (2, 'member', 'Vo Thien', 'password', 'nhanvohmd2@gmail.com', '0919074982', 'Kien Giang', 0);
INSERT INTO _user VALUES (3, 'member', 'Nguyen Vo', 'password', 'nhanvohmd3@gmail.com', '0919074983', 'Kien Giang', 0);
INSERT INTO _user VALUES (4, 'member', 'Nguyen Vo 1', 'password', 'nhanvohmd4@gmail.com', '0919074984', 'Kien Giang', 0);
INSERT INTO _user VALUES (5, 'member', 'Nguyen Vo 2', 'password', 'nhanvohmd5@gmail.com', '0919074985', 'Kien Giang', 0);
INSERT INTO _user VALUES (6, 'member', 'Nguyen Vo 3', 'password', 'nhanvohmd6@gmail.com', '0919074986', 'Kien Giang', 0);
INSERT INTO _user VALUES (7, 'member', 'Nguyen Vo 4', 'password', 'nhanvohmd7@gmail.com', '0919074987', 'Kien Giang', 0);
INSERT INTO _user VALUES (8, 'member', 'Nguyen Vo 5', 'password', 'nhanvohmd8@gmail.com', '0919074988', 'Kien Giang', 0);
INSERT INTO _user VALUES (9, 'member', 'Nguyen Vo 6', 'password', 'nhanvohmd9@gmail.com', '0919074989', 'Kien Giang', 0);
INSERT INTO _user VALUES (10, 'member', 'Nguyen Vo 7', 'password', 'nhanvohmd10@gmail.com', '0919074923', 'Kien Giang', 0);
INSERT INTO _user VALUES (11, 'member', 'Nguyen Vo 8', 'password', 'nhanvohmd11@gmail.com', '0919074945', 'Kien Giang', 0);
INSERT INTO _user VALUES (12, 'member', 'Nguyen Vo 9', 'password', 'nhanvohmd12@gmail.com', '0919074967', 'Kien Giang', 0);
INSERT INTO _user VALUES (13, 'member', 'Nguyen Vo 10', 'password', 'nhanvohmd13@gmail.com', '0919074912', 'Kien Giang', 0);



INSERT INTO _ADMIN VALUES(1);
INSERT INTO _ADMIN VALUES(2);
INSERT INTO _ADMIN VALUES(3);



INSERT INTO _MEMBER VALUES(1);
INSERT INTO _MEMBER VALUES(2);
INSERT INTO _MEMBER VALUES(3);


USE RESTAURANT_2022;
INSERT INTO public_information VALUES(74981, 'BK Restaurant', '268 Ly Thuong Kiet, District 10', 'bkrestaurant@gmail.com', '0919974654');



INSERT INTO _COMMENT VALUES(1, "Lorem ipsum dolor sit amet 1", 100, "2022-01-19 03:14:07");
INSERT INTO _COMMENT VALUES(2, "Lorem ipsum dolor sit amet 2", 200, "2022-01-19 03:14:07");
INSERT INTO _COMMENT VALUES(3, "Lorem ipsum dolor sit amet 3", 300, "2022-01-19 03:14:07");
INSERT INTO _COMMENT VALUES(4, "Lorem ipsum dolor sit amet 4", 500, "2022-01-19 03:14:07");
INSERT INTO _COMMENT VALUES(5, "Lorem ipsum dolor sit amet 5", 600, "2022-01-19 03:14:07");





INSERT INTO CATEGORY VALUES(1, "Fast food");
INSERT INTO CATEGORY VALUES(2, "Hot food");
INSERT INTO CATEGORY VALUES(3, "Cold food");





INSERT INTO PRODUCT VALUES(1, "Product 1", 100, "image path", "here is description", 100, "2022-01-19 03:14:07", 1);
INSERT INTO PRODUCT VALUES(2, "Product 2", 200, "image path", "here is description", 100, "2022-01-19 03:14:07", 1);
INSERT INTO PRODUCT VALUES(3, "Product 3", 300, "image path", "here is description", 100, "2022-01-19 03:14:07", 1);
INSERT INTO PRODUCT VALUES(4, "Product 4", 500, "image path", "here is description", 100, "2022-01-19 03:14:07", 1);
INSERT INTO PRODUCT VALUES(5, "Product 5", 600, "image path", "here is description", 100, "2022-01-19 03:14:07", 1);




INSERT INTO NEWS VALUES(1, "TITLE NEWS 1", "CONTENT OF NEWS", "2022-01-19 03:14:07", 1);
INSERT INTO NEWS VALUES(2, "TITLE NEWS 2", "CONTENT OF NEWS", "2022-01-19 03:14:07", 1);
INSERT INTO NEWS VALUES(3, "TITLE NEWS 3 ", "CONTENT OF NEWS", "2022-01-19 03:14:07", 1);
INSERT INTO NEWS VALUES(4, "TITLE NEWS 4", "CONTENT OF NEWS", "2022-01-19 03:14:07", 1);







INSERT INTO MANAGES_COMMENT_NEWS_USER VALUES(1, 1, 1, 1);
INSERT INTO MANAGES_COMMENT_NEWS_USER VALUES(2, 1, 1, 2);
INSERT INTO MANAGES_COMMENT_NEWS_USER VALUES(3, 1, 1, 3);
INSERT INTO MANAGES_COMMENT_NEWS_USER VALUES(4, 1, 1, 1);

INSERT INTO MANAGES_COMMENT_NEWS_USER VALUES(1, 2, 1, 1);
INSERT INTO MANAGES_COMMENT_NEWS_USER VALUES(2, 2, 1, 1);
INSERT INTO MANAGES_COMMENT_NEWS_USER VALUES(3, 2, 1, 1);
INSERT INTO MANAGES_COMMENT_NEWS_USER VALUES(4, 2, 1, 1);