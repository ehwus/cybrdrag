import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserCard from './UserCard';
import { loadUser } from '../../actions/auth';
import ShareCard from './ShareCard';


const UserProfile = ({
  loadUser,
  auth,
}) => {
  useEffect(() => {
    loadUser();
  },[loadUser])

    return (
      <Fragment>
        {auth.loading ? (<h1> loading </h1>) :
          (  <div>
              <UserCard user={ auth.user } />
              { auth.user.shares.map(share =>
                <ShareCard key={ share._id } share={ share } />
              ) }
            </div>)
        }
      </Fragment>
    )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

UserProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { loadUser })(
  UserProfile
)
