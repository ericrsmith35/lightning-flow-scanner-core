export class FlowType {

  public static backEndTypes = ['AutoLaunchedFlow', 'CustomEvent', 'InvocableProcess', 'Orchestrator', 'EvaluationFlow', 'ActionCadenceAutolaunchedFlow'];
  public static processBuilder = ['Workflow'];
  public static visualTypes = ['Flow', 'IndividualObjectLinkingFlow', 'LoginFlow', 'RoutingFlow', 'Appointments', 'ActionCadenceStepFlow', 'ContactRequestFlow', 'ContactRequestFlow', 'CustomerLifecycle', 'FieldServiceMobile', 'FieldServiceWeb', 'Survey', 'SurveyEnrich'];
  public static unsupportedTypes = ['CheckoutFlow', 'FSCLending', 'FSCLending', 'LoyaltyManagementFlow'];

  public static allTypes = function () {
    return [...this.backEndTypes, ...this.processBuilder, ...this.visualTypes];
  }

}

