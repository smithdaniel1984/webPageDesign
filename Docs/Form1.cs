using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;

namespace billsForm
{
    public partial class billsForm : Form
    {
        public billsForm()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            txtBoxCable.Text = "0";
            txtBoxCredit.Text = "0";
            txtBoxInsur.Text = "0";
            txtBoxOneMain.Text = "0";
            txtBoxRent.Text = "0";
            txtBoxSallie.Text = "0";
            txtBoxWheeler.Text = "0";
        }

        private void btnMonth_Click(object sender, EventArgs e)
        {
            try
            {
                double monthTotal = Convert.ToDouble(txtBoxCable.Text) + Convert.ToDouble(txtBoxRent.Text) +
                    Convert.ToDouble(txtBoxWheeler.Text) + Convert.ToDouble(txtBoxCredit.Text) +
                    Convert.ToDouble(txtBoxOneMain.Text) + Convert.ToDouble(txtBoxSallie.Text) + Convert.ToDouble(txtBoxInsur.Text);

                lblMonthTotal.Text = string.Format("{0: C2}", monthTotal.ToString());

                double remaining =  506.00 * 4 - Convert.ToDouble(lblMonthTotal.Text);
                lblRemaining.Text = remaining.ToString();
            }
            catch (Exception)
            {
                Console.WriteLine("Unable to process this");
            }
        }
    }
}
