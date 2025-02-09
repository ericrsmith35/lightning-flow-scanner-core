import { IRuleDefinition } from '../interfaces/IRuleDefinition';
import { DefaultRuleStore } from '../store/DefaultRuleStore';
import { DynamicRule } from './DynamicRule';

export function GetRuleDefinitions(ruleConfig?: Map<string, {}>): IRuleDefinition[] {
  const matchedRules: any[] = [];
  let severity = 'error';

  if (ruleConfig && ruleConfig instanceof Map) {
    for (const ruleName of ruleConfig.keys()) {
      const matchedRule = new DynamicRule(ruleName);
      const configuredSeverity = ruleConfig.get(ruleName)['severity'];
      if (configuredSeverity && (configuredSeverity === "error" || configuredSeverity === "warning" || configuredSeverity === "note")) {
        severity = configuredSeverity;
      } else {
        throw new Error(`Invalid severity "${configuredSeverity}" provided for rule "${ruleName}".`);
      }
      matchedRule['severity'] = severity;
      matchedRules.push(matchedRule);
    }
  } else {
    // tslint:disable-next-line:forin
    for (const rule in DefaultRuleStore) {
      const matchedRule = new DynamicRule(rule);
      matchedRule['severity'] = severity;
      matchedRules.push(matchedRule);
    }
  }

  return matchedRules;
}
