namespace ApplicationInsights
{
  public class ApplicationInsightsSettings
  {
    public string InstrumentationKey { get; set; }
    public bool IsTelemetryEnabled { get; set; }
    public bool IsProfilerEnabled { get; set; }
    public string CloudRole { get; set; }
  }
}
