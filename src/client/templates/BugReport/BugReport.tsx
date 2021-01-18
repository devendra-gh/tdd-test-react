import { useEffect, useContext } from 'react';
import BugReportStatic from '@tamm/ui-lib-v2-bug-report';
import baseUrl from 'client/utils/baseUrl';
import { StoreContext } from 'client/services/context';

export function BugReport() {
  const store = useContext(StoreContext);
  useEffect(() => {
    BugReportStatic.init({
      bugReportIntegrationApi: `${baseUrl}/pub/adfeedback/bugReport`,
      store,
      isStore: !!store,
    });
    return () => {
      BugReportStatic.destroy();
    };
  }, []);
  return null;
}
