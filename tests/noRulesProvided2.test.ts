import { assert, expect } from 'chai';
import 'mocha';
import { getRules, scan } from '../src';
import { Flow } from '../src/main/models/Flow';
import { ScanResult } from '../src/main/models/ScanResult';
import CreateANewAccount from './testfiles/CreateANewAccount.json';

describe('When running with empty object rules in the rule config', () => {
  let flow: Flow;

  before('arrange', () => {
    // ARRANGE
    flow = new Flow({
      path: './testfiles/CreateANewAccountWithChild.flow-meta.xml',
      xmldata: CreateANewAccount,
    });
  });
  

  it('all default rules should be used', () => {

    const ruleConfig = {
        rules: 
          { 
              
          },
        exceptions: 
          {
              CreateANewAccountWithChild: 
                  {"DuplicateDMLOperation":["ViewAccountId"]}
          }
      };
    const results: ScanResult[] = scan([flow], ruleConfig);
    const rules = getRules();
    expect(results[0].ruleResults.length).to.equal(rules.length);
  });
});
