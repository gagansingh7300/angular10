// 9fbef606107a605d69c0edbcd8029e5d_SYMPHONY
using ApplicationInsights;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Net;

namespace WebApp
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddSingleton(services);
      services.AddControllersWithViews();
      services.Configure<GzipCompressionProviderOptions>(options => options.Level = System.IO.Compression.CompressionLevel.Fastest);
      services.AddResponseCompression(options =>
      {
        options.EnableForHttps = true;
        options.Providers.Add<GzipCompressionProvider>();
        options.MimeTypes = new[] {"text/css",
                       "application/javascript",
                       "application/json",
                       "image/svg+xml",
                       "font/woff2",
                       "font/woff",
                       "font/eot",
                       "image/x-icon",
                       "image/png",
                       "image/jpg",
                       "image/gif"};
      });
      // In production, the Angular files will be served from this directory
      services.AddSpaStaticFiles(configuration =>
      {
        configuration.RootPath = "wwwroot/dist";
      });
      services.ConfigureApplicationInsight(Configuration, "Digital FE Platform");
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        app.UseExceptionHandler("/Error");
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
        app.Use(async (context, next) =>
        {
          context.Response.Headers.Add("Strict-Transport-Security", $"max-age=31536000; includeSubDomains");
          context.Response.Headers.Add("Content-Type-Options", "nosniff");
          context.Response.Headers.Add("X-Content-Type-Options", "nosniff");
          context.Response.Headers.Add("X-Frame-Options", "Deny, SAMEORIGIN");
          context.Response.Headers.Add("X-XSS-Protection", "1; mode=block");
          // Requests other than GET requests are not allowed
          if (context.Request.Method != "GET")
          {
            context.Response.StatusCode = (int)HttpStatusCode.MethodNotAllowed;
            return;
          }
          await next();
        });
      }

      app.UseHttpsRedirection();
      app.UseResponseCompression();
      app.UseStaticFiles();
      app.UseSpaStaticFiles();
      app.UseRouting();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllerRoute(
                  name: "default",
                  pattern: "{controller}/{action=Index}/{id?}");
      });

      app.UseSpa(spa =>
      {
              // To learn more about options for serving an Angular SPA from ASP.NET Core,
              // see https://go.microsoft.com/fwlink/?linkid=864501

              spa.Options.SourcePath = "ClientApp";

              //if (env.IsDevelopment())
              //{
              //    spa.UseAngularCliServer(npmScript: "start");
              //}
            });
    }
  }
}
