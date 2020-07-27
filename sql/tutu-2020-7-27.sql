drop table if exists user;
create table user(
	id varchar(50) primary key,
	email varchar(50),
	username varchar(50),
	password varchar(50),
	phoneNum varchar(50)
);

drop table if exists role;
create table role(
	id varchar(50) primary key,
	role_name varchar(50),
	role_desc varchar(50)
);

drop table if exists role_user;
create table role_user(
	user_id varchar(50),
	role_id varchar(50),
	constraint pk_user_role primary key(user_id,role_id),
	foreign key (user_id) references user(id),
	foreign key (role_id) references role(id)
);

drop table if exists permission;
create table permission(
	id varchar(50) primary key,
	permission_name varchar(50),
	permission_tag varchar(50)
);


drop table if exists role_permission;
create table role_permission(
	role_id varchar(50),
	permission_id varchar(50),
	constraint pk_role_permission primary key(role_id,permission_id),
	foreign key (role_id) references role(id),
	foreign key (permission_id) references permission(id)
);

INSERT INTO USER VALUES('0001','12345678@qq.com','ego','123456789','13107078898');
INSERT INTO USER VALUES('0002','1234561111@qq.com','pom','987654321','1310707812');
INSERT INTO USER VALUES('0003','12345678sfa@qq.com','simida','abcdefgh','131070222123');

INSERT INTO role VALUES('10001','admin','拥有高级权限');
INSERT INTO role VALUES('10002','user','拥有部分权限');

INSERT INTO permission VALUES('20001','修改分数','changeGrade');
INSERT INTO permission VALUES('20002','修改邮箱','changeEmail');
INSERT INTO permission VALUES('20003','修改手机号','changePhoneNumber');
INSERT INTO permission VALUES('20004','修改用户名','changeUsername');
INSERT INTO permission VALUES('20005','修改密码','changePassword');
INSERT INTO permission VALUES('20006','修改课程时间','changeCourseDuration');


INSERT INTO role_user VALUES('0001','10001');
INSERT INTO role_user VALUES('0001','10002');
INSERT INTO role_user VALUES('0002','10002');
INSERT INTO role_user VALUES('0003','10002');

INSERT INTO role_permission VALUES('10001','20001');
INSERT INTO role_permission VALUES('10001','20002');
INSERT INTO role_permission VALUES('10001','20003');
INSERT INTO role_permission VALUES('10001','20004');
INSERT INTO role_permission VALUES('10001','20005');
INSERT INTO role_permission VALUES('10001','20006');
INSERT INTO role_permission VALUES('10002','20002');
INSERT INTO role_permission VALUES('10002','20003');
INSERT INTO role_permission VALUES('10002','20004');
INSERT INTO role_permission VALUES('10002','20005');

ALTER TABLE USER ADD UNIQUE(username);
