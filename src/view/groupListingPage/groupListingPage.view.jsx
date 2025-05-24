import React from 'react';
import { withNetworkState } from 'ui/hoc/withNetworkState';
import classNames from 'classnames';
import { get, map } from 'lodash';
import { GROUP_PAGE_WIDGETS } from 'constants/templates';
import { RemoteAppContainer } from 'ui/containers/RemoteAppContainer';
import { getDynamicClass } from 'utils/getDynamicClass';

// widget views
const WIDGET_VIEWS = {
  [GROUP_PAGE_WIDGETS.GROUP_LISTING]: RemoteAppContainer,
};

/**
 * @type {object}
 * @desc A React presentation/dumb view component.
 * @example
 * import { groupListingPageView as GroupListingPageView } from 'ui/views/widgets/groupListingPage';
 *
 * // render
 * <GroupListingPage propName='propValue'/>
 */
export const _groupListingPage = (props) => {
  const widgets = get(props, 'componentData.widgets', []);

  return (
    <div className="ui-group-page">
      {/* widgets */}
      {map(widgets, (widget) => {
        const styleClass = getDynamicClass(widget.layoutConfig);
        const className = classNames(
          'ui-group-page__widget',
          `ui-group-page__widget__${widget.name}`,
          styleClass
        );
        const WidgetView = WIDGET_VIEWS[widget.name];

        return (
          <div
            className={className}
            key={`widget-${widget.name}`}
            data-widget={widget.name}
            data-is-remote-app={get(widget.config, 'remoteApp', false)}
          >
            <WidgetView
              widget={widget}
              history={props.history}
              requestPayload={get(widget, 'url.request.context', {})}
            />
          </div>
        );
      })}
    </div>
  );
};

// set display name
_groupListingPage.displayName = 'groupListingPage';

// prop types
_groupListingPage.propTypes = {};

const groupListingPagePreloader = () => <></>;

export const groupListingPageView = withNetworkState(
  groupListingPagePreloader,
  _groupListingPage
);
