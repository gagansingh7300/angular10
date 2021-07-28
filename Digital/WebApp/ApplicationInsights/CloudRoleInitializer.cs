// 9fbef606107a605d69c0edbcd8029e5d_SYMPHONY
using Microsoft.ApplicationInsights.Channel;
using Microsoft.ApplicationInsights.Extensibility;

namespace ApplicationInsights
{
  public class CloudRoleInitializer : ITelemetryInitializer
  {
    private readonly string _roleName;
    public CloudRoleInitializer(string roleName)
    {
      _roleName = roleName;
    }
    public void Initialize(ITelemetry telemetry)
    {
      telemetry.Context.Cloud.RoleName = _roleName;
    }
  }
}
