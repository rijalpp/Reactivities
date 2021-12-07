using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Persistence;
using Domain;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace API.Controllers
{
    public class ActivitiesController: BaseApiController
    {
        private readonly DataContext _context;
        public ActivitiesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public List<Activity> GetActivities() => _context.Activities.ToList();

        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await _context.Activities.FindAsync(id);
        }


    }
}