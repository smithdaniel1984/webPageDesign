using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using webPageDesign.Models;
using System.IO;
using System.Data.SqlClient;
using System.Data;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Collections;

namespace webPageDesign.Controllers
{
    public class ContactController : Controller
    {
        // GET: Contact

        public ActionResult Contact()
        {
            string userName = Request.Form["txtBoxName"];
            string userComments = Request.Form["txtBoxComments"];
            List<string> commentsStore = new List<string>();

            var comment1 = new Contact()
            {
                Name = userName,
                comments = userComments,
                commentDate = DateTime.Now,
                storeComments = commentsStore,
            };

                return View(comment1);
        }
             
        public ActionResult connectData()
        {
            string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;

            SqlConnection myConnection = new SqlConnection(cs);
            myConnection.Open();
            DataTable dt = new DataTable();
            SqlDataAdapter adapt = new SqlDataAdapter("Select * from Table Order by Id", myConnection);
            adapt.Fill(dt);
            myConnection.Close();

            PagedDataSource pds = new PagedDataSource();
            DataView dv = new DataView(dt);
            pds.DataSource = dv;
            pds.AllowPaging = true;
            pds.PageSize = 4;

            myConnection.Open();
            SqlCommand cmd = new SqlCommand(
                "insert into Table(Name, comments) values(@Name, @comments)", myConnection);
            myConnection.Close();

            return View();
        }

        public ActionResult storeComment()
        {
            using (var context = new commentsContext())
            {
                var comment = context.commentsStore;

                context.commentsStore.Add(new Contact {});
            }

            return View();
        }
    }
}