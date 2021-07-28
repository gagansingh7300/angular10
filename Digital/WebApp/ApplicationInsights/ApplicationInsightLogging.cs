using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Options;

namespace ApplicationInsights
{
  public static class ApplicationInsightLogging
  {
    public static void ConfigureApplicationInsight(this IServiceCollection services, IConfiguration configuration, string CloudRole)
    {
      services.Configure<ApplicationInsightsSettings>(configuration.GetSection("AppSettingsConfig:ApplicationInsights"));
      var applicationInsightsSettings = services.BuildServiceProvider().GetRequiredService<IOptionsMonitor<ApplicationInsightsSettings>>();
      if (applicationInsightsSettings.CurrentValue.IsTelemetryEnabled)
      {
        services.AddApplicationInsightsTelemetry(applicationInsightsSettings.CurrentValue.InstrumentationKey);
        services.AddSingleton<ITelemetryInitializer>(new CloudRoleInitializer(CloudRole));
      }
    }
  }
}
