import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import { SERVICE_RESPONSE_STATUS } from 'constants/common';

//import service, view
import { HttpWrapperService } from 'services/HttpWrapper';
import { groupListingPageView as GroupListingPageView } from 'ui/views/widgets/groupListingPage';
import { resolvedLabels } from 'resolvers/labelValue';

/**
 * @type {function}
 * @desc A React container/smart component to render a React presentational/dumb component (view).
 * @example
 * import { GroupListingPage } from 'ui/containers/GroupListingPage';
 *
 * // render
 * <GroupListingPage propName='propValue'/>
 */
export const GroupListingPage = (props) => {
  const [state, setState] = useState({
    isFetching: true,
    componentData: {},
    networkStatus: undefined,
    widgetError: {},
  });

  const groupListingPageService = new HttpWrapperService();

  /**
   * @summary : This function fetches data of this widget.
   * @service : Call groupListingPage service with context as request payload.
   *      @success | On success, update state with the success data.
   *      @failure | On service failure, updated state with the error message and error data.
   * @returns : none
   * @example : fetchData();
   */
  const fetchData = async () => {
    log.debug('GroupListingPage.fetchData()');

    const { status, data } = await groupListingPageService.makePostRequest({
      url: get(CONFIG, 'endpoints.routes.fetchGroupListing', undefined),
      data: {},
    });

    const resolvedData = resolvedLabels(data);

    if (SERVICE_RESPONSE_STATUS.SUCCESS === status) {
      setState({
        ...state,
        isFetching: false,
        componentData: resolvedData,
        networkStatus: status,
      });
    } else {
      setState({
        ...state,
        isFetching: false,
        networkStatus: status,
        widgetError: resolvedData,
      });
    }
  };

  /**
   * @summary React Hook that triggers data fetching when the component mounts and has no dependencies.
   * @name useEffect
   * @param {function} effect - The function to be executed when the component mounts.
   * @param {Array} dependencies - An empty array ([]) indicating that the effect has no dependencies and should only run once when the component mounts.
   * @returns {void}
   */
  useEffect(() => {
    fetchData();
  }, []);

  return <GroupListingPageView {...props} {...state} />;
};

// set display name
GroupListingPage.displayName = 'GroupListingPage';

// prop types
GroupListingPage.propTypes = {};
