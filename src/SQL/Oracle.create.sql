



CREATE TABLE "ИнфБрон"
(

	"primaryKey" RAW(16) NOT NULL,

	"Пассажир" RAW(16) NOT NULL,

	"Рейс" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Проверка"
(

	"primaryKey" RAW(16) NOT NULL,

	"Дата" DATE NULL,

	"Время" NVARCHAR2(255) NULL,

	"ЛентаПечати" NUMBER(1) NULL,

	"Терминал" RAW(16) NOT NULL,

	"Оператор" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Рейс"
(

	"primaryKey" RAW(16) NOT NULL,

	"Куда" NVARCHAR2(255) NULL,

	"Откуда" NVARCHAR2(255) NULL,

	"Дата" DATE NULL,

	"ВремяОтпр" NVARCHAR2(255) NULL,

	"НачПосад" NVARCHAR2(255) NULL,

	"КонецПосад" NVARCHAR2(255) NULL,

	"Выход" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "КодБрони"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "МестоНаРейс"
(

	"primaryKey" RAW(16) NOT NULL,

	"Место" NVARCHAR2(255) NULL,

	"Класс" NVARCHAR2(6) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Терминал"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Оператор"
(

	"primaryKey" RAW(16) NOT NULL,

	"ID" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"КодДоступа" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПосадТалон"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаВыд" DATE NULL,

	"Пассажир" RAW(16) NOT NULL,

	"Рейс" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Пассажир"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"МестоНаРейс" RAW(16) NOT NULL,

	"КодБрони" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ИнфБрон"
	ADD CONSTRAINT "ИнфБрон_FПасс_3102" FOREIGN KEY ("Пассажир") REFERENCES "Пассажир" ("primaryKey");

CREATE INDEX "ИнфБрон_IПасс_4662" on "ИнфБрон" ("Пассажир");

ALTER TABLE "ИнфБрон"
	ADD CONSTRAINT "ИнфБрон_FРейс_0" FOREIGN KEY ("Рейс") REFERENCES "Рейс" ("primaryKey");

CREATE INDEX "ИнфБрон_IРейс" on "ИнфБрон" ("Рейс");

ALTER TABLE "Проверка"
	ADD CONSTRAINT "Проверка_FТер_4513" FOREIGN KEY ("Терминал") REFERENCES "Терминал" ("primaryKey");

CREATE INDEX "Проверка_IТер_8864" on "Проверка" ("Терминал");

ALTER TABLE "Проверка"
	ADD CONSTRAINT "Проверка_FОпе_5477" FOREIGN KEY ("Оператор") REFERENCES "Оператор" ("primaryKey");

CREATE INDEX "Проверка_IОпе_3820" on "Проверка" ("Оператор");

ALTER TABLE "ПосадТалон"
	ADD CONSTRAINT "ПосадТалон_FП_6795" FOREIGN KEY ("Пассажир") REFERENCES "Пассажир" ("primaryKey");

CREATE INDEX "ПосадТалон_IПа_121" on "ПосадТалон" ("Пассажир");

ALTER TABLE "ПосадТалон"
	ADD CONSTRAINT "ПосадТалон_FР_9217" FOREIGN KEY ("Рейс") REFERENCES "Рейс" ("primaryKey");

CREATE INDEX "ПосадТалон_IРейс" on "ПосадТалон" ("Рейс");

ALTER TABLE "Пассажир"
	ADD CONSTRAINT "Пассажир_FМес_7845" FOREIGN KEY ("МестоНаРейс") REFERENCES "МестоНаРейс" ("primaryKey");

CREATE INDEX "Пассажир_IМес_4385" on "Пассажир" ("МестоНаРейс");

ALTER TABLE "Пассажир"
	ADD CONSTRAINT "Пассажир_FКод_1054" FOREIGN KEY ("КодБрони") REFERENCES "КодБрони" ("primaryKey");

CREATE INDEX "Пассажир_IКод_6492" on "Пассажир" ("КодБрони");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


