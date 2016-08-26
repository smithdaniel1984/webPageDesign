using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(webPageDesign.Startup))]
namespace webPageDesign
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
