using Server.Dto;
using Server.Services;

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

app.MapGet("/result", () => new ResultDto
    {
        Result = ResultService.GetRandomResult()
    })
    .WithName("Result")
    .WithOpenApi();

app.Run();