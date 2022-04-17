# Client 
* Trong thư mục client, run: npm start để  chạy giao diện
# Server
Là các thư mục còn lại của project. Luồng hoạt động: 
* Khi có một request đến server -> đến file index.php. File này chuyển đến thực hiện trong file public/index.php.
* Chuyển hướng đến file web.php. File này viết các hàm get, post (t làm cho nó giống Laravel tí) -> Chuyển hướng đến controller tương ứng (ở đây t ví dụ là ExampleController)
* Các file Core/Request.php và Core/Router.php mn đọc hiểu và thêm các hàm nếu cần thiết để code.
* Mn có thể nhập các url: http://localhost/example/99?a=2 hoặc http://localhost/example/99 hoặc http://localhost/example/99?a=2&b=5 đều trả về data vì nó match với regular expression trong hàm get t đã vi dụ sẵn

* Tất cả các thư mục của project này mn đặt trong thư mục root của apache như đã học