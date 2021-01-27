// Instructors
// npx sequelize-cli model:generate --name Instructors --attributes first_name:string,last_name:string,phone:string,email:string,active:boolean

// Classes
// npx sequelize-cli model:generate --name Classes --attributes id_Instructor:integer,name:string,subject:string,date_starts:dateonly,date_ends:dateonly,active:boolean

// Schedules
// npx sequelize-cli model:generate --name Schedules --attributes time_starts:time,time_ends:time

// ClassSchedules
// npx sequelize-cli model:generate --name ClassSchedules --attributes id_Class:integer,id_Schedule:integer,day_of_the_week:string,active:boolean

// Clients
// npx sequelize-cli model:generate --name Clients --attributes first_name:string,last_name:string,phone:string,email:string,active:boolean

// ClientClasses
// npx sequelize-cli model:generate --name ClientClasses --attributes id_Client:integer,id_Class:integer,date_starts:dateonly,date_ends:dateonly,active:boolean

// Memberships
// npx sequelize-cli model:generate --name Memberships --attributes name:string,price:smallint,lifespan_in_months:smallint,active:boolean

// Registrations
// npx sequelize-cli model:generate --name Registrations --attributes id_Client:integer,id_Membership:integer,time_of_creation:date,periods:smallint,active:boolean

// Payments
// npx sequelize-cli model:generate --name Payments --attributes id_Registration:integer,time_of_creation:date



// Migration
// npx sequelize-cli db:migrate

// Migration undo all
// npx sequelize-cli db:migrate:undo:all

// Migration undo last
// npx sequelize-cli db:migrate:undo
