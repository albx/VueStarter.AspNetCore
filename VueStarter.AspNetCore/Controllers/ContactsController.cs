using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace VueStarter.AspNetCore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var contacts = new
            {
                github = "https://github.com/albx/VueStarter.AspNetCore",
                twitter = "https://twitter.com/albx87",
                emails = new string[] { "albi.mori@mail.com", "info@morialberto.it" }
            };

            return Ok(contacts);
        }
    }
}