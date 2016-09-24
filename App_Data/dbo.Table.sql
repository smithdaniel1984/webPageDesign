CREATE TABLE [dbo].[Table] (
    [Id]      INT           IDENTITY (1, 1) NOT NULL,
    [Name]    NCHAR (10)    NULL,
    [Comment] VARCHAR (100) NULL,
    [CreatedOn] DATETIME NULL, 
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

