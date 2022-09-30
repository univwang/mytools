create table tool1
(
    id      int auto_increment
        primary key,
    indexes varchar(255)  not null,
    content varchar(2000) null,
    constraint my_tool1_id_uindex
        unique (id),
    constraint my_tool1_index_uindex
        unique (indexes)
);

