// 9fbef606107a605d69c0edbcd8029e5d_SYMPHONY
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
  [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {

        [HttpGet]
        public string Get()
        {
            return "Welcome Digital Platform app";
        }
    }
}
