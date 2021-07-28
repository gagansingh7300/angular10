// 9fbef606107a605d69c0edbcd8029e5d_SYMPHONY
using Azure.Identity;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.AzureAppConfiguration;
using Microsoft.Extensions.Hosting;
using System;

namespace WebApp
{
  public class Program
  {
    public static void Main(string[] args)
    {
      CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
              webBuilder.ConfigureAppConfiguration((hostingContext, config) => ConfigureAppConfigurations(config));
              webBuilder.UseStartup<Startup>();
              webBuilder.UseKestrel(c => c.AddServerHeader = false);
            });

    private static void ConfigureAppConfigurations(IConfigurationBuilder config)
    {
      var configEndpoint = Environment.GetEnvironmentVariable("AzureConfigEndpoint");
      config.AddAzureAppConfiguration(options =>
      {
        options.Connect(configEndpoint)
         .ConfigureRefresh(refresh => refresh.Register(key: "App:Sentinel", Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT"), refreshAll: true))
         .Select(KeyFilter.Any, Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT"));
        options.ConfigureKeyVault(kv => kv.SetCredential(new DefaultAzureCredential()));
      }, true);
    }
  }
}
