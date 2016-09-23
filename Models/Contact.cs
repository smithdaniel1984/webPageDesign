using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace webPageDesign.Models
{
    public class Contact
    {
        public int contactID { get; set; }

        public int entryCount { get; set; }

        public string Name { get; set; }

        public string comments { get; set; }

        public List <string> storeComments { get; set; }

        public DateTime commentDate { get; set; }

    }

    public class commentsContext:DbContext
        {
            public DbSet<Contact> commentsStore { get; set; }
        }
}