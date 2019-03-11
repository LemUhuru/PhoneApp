import React, { Component } from 'react';
import ActivityList from '../../components/Activity/ActivityList.jsx';
import ActivityListFilterNav from '../../components/Activity/ActivityListFilterNav.jsx';
import ActivityArchiveButton from '../../components/Activity/ActivityArchiveButton.jsx';
import ActivityResetButton from '../../components/Activity/ActivityResetButton.jsx';
import { getActiveList, getActivityIds } from '../../helpers/activity';
import Loader from '../../components/Common/Loader.jsx';

class ActivityFeed extends Component {
    constructor(props) {
        super(props)

        this.state = { activeNav: 'inbox' };
    }

    handleNavClick = event => {
        event.stopPropagation();

        const activeNav = event.target.id;
        this.setState({ activeNav });
    }

    handleResetClick = event => {
        event.stopPropagation();
        const { resetActivities, getActivities } = this.props;

        resetActivities().then(getActivities);
    };

    handleArchiveClick = event => {
        event.stopPropagation();

        const { activities, updateActivities, getActivities } = this.props;
        const activityIds = getActivityIds(activities);
        updateActivities(activityIds).then(getActivities).then(getActivities);
    };



    render() {
        const { activities, updateActivitiesPending, isPending, history } = this.props;
        const { activeNav } = this.state;
        const activeList = getActiveList(activeNav, activities);
        const isActiveList = activeList.length > 0;
        const showLoader = isPending || updateActivitiesPending;
        let activeFilterButton;

        if (activeNav === 'inbox') {
            activeFilterButton = <ActivityArchiveButton archiveAll={true} handleArchiveClick={this.handleArchiveClick} />
        } else if (activeNav === 'all') {
            activeFilterButton = <ActivityResetButton handleResetClick={this.handleResetClick} />         
        }

        return (<section className="activity-feed-section">
                    {showLoader ? 
                            <Loader />
                            :
                            <div>
                                <ActivityListFilterNav activeNav={activeNav} handleNavClick={this.handleNavClick} />
                                {isActiveList && (<div>
                                                    {activeFilterButton}
                                                    <ActivityList history={history} activeNav={activeNav} activeList={activeList} />
                                                </div>)
                                }
                            </div>}
                </section>)
        }
};

export default ActivityFeed;