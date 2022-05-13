using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieAPI.Data;
using MovieAPI.DTOs;
using MovieAPI.Entities;

namespace MovieAPI.Controllers
{
    // [ApiController]
    // [Route("[api/genres]")]
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly ILogger<GenresController> _logger;
        private readonly IMapper _mapper;
        public GenresController(ILogger<GenresController> logger, AppDbContext context, IMapper mapper)
        {
            _mapper = mapper;
            _logger = logger;
            _context = context;
        }

        [HttpGet] // api/genres
        public async Task<ActionResult<List<GenreDTO>>> Get()
        {
            _logger.LogInformation("Getting all the genres");

            var genres = await _context.Genres.OrderBy(x => x.Name).ToListAsync();
            return _mapper.Map<List<GenreDTO>>(genres);
            // return Ok(genres);
        }

        // [HttpGet("{Id:int}", Name = "getGenre")] // api/genres/example
        // public async Task<ActionResult<GenreDTO>> Get(int Id)
        // {
        //     var genre = await context.Genres.FirstOrDefaultAsync(x => x.Id == Id);

        //     if (genre == null)
        //     {
        //         return NotFound();
        //     }

        //     return mapper.Map<GenreDTO>(genre);
        // }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody]GenreCreationDTO genreCreationDTO)
        {
            var genre = _mapper.Map<Genre>(genreCreationDTO);
            _context.Add(genre);
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}