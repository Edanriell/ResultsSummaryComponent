var builder = WebApplication.CreateBuilder(args);

// Without this code you can't do external api calls
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy => { policy.WithOrigins("http://localhost:5173", "https://localhost:5173"); });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Without this code you can't do external api calls
app.UseCors();

var results = new List<Result>
{
    new() { ReactionScore = 80, MemoryScore = 92, VerbalScore = 61, VisualScore = 73 },
    new() { ReactionScore = 43, MemoryScore = 52, VerbalScore = 77, VisualScore = 53 },
    new() { ReactionScore = 23, MemoryScore = 74, VerbalScore = 84, VisualScore = 61 },
    new() { ReactionScore = 90, MemoryScore = 90, VerbalScore = 94, VisualScore = 96 },
    new() { ReactionScore = 62, MemoryScore = 93, VerbalScore = 31, VisualScore = 61 },
    new() { ReactionScore = 95, MemoryScore = 67, VerbalScore = 85, VisualScore = 25 },
    new() { ReactionScore = 72, MemoryScore = 32, VerbalScore = 71, VisualScore = 27 },
    new() { ReactionScore = 72, MemoryScore = 36, VerbalScore = 71, VisualScore = 99 },
    new() { ReactionScore = 100, MemoryScore = 88, VerbalScore = 99, VisualScore = 98 },
    new() { ReactionScore = 77, MemoryScore = 41, VerbalScore = 64, VisualScore = 89 },
    new() { ReactionScore = 72, MemoryScore = 89, VerbalScore = 52, VisualScore = 56 },
    new() { ReactionScore = 83, MemoryScore = 52, VerbalScore = 86, VisualScore = 72 }
};

app.MapGet("/result", () =>
    {
        var random = new Random();
        var randomIndex = random.Next(results.Count);
        var randomResult = results[randomIndex];
        return new ResultDto
        {
            Result = randomResult
        };
    })
    .WithName("Result")
    .WithOpenApi();

app.Run();

public class Result
{
    public byte ReactionScore { get; set; }
    public byte MemoryScore { get; set; }
    public byte VerbalScore { get; set; }
    public byte VisualScore { get; set; }
}

public class ResultDto
{
    public Result Result { get; set; } = null!;
}