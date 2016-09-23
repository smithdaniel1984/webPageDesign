CREATE TABLE [dbo].[Contacts] (
    [contactID]   INT            IDENTITY (1, 1) NOT NULL,
    [entryCount]  INT            NOT NULL,
    [Name]        NVARCHAR (MAX) NOT NULL,
    [comments]    NVARCHAR (MAX) NOT NULL,
    [commentDate] DATETIME       NOT NULL,
    CONSTRAINT [PK_dbo.Contacts] PRIMARY KEY CLUSTERED ([contactID] ASC)
);

