import React, { useContext} from 'react'
import UserContext from '../../store/user-context'

import Sidebar from '../../components/admin/Siderbar'
import NavigationBar from '../../components/admin/NavigationBar'

const AccessFunds = () => {
  const userCtx=  useContext(UserContext)
  return (
    <div className="tw-mx-auto tw-container">
      <div className="xl:tw-grid xl:tw-grid-cols-6">
        <div className="tw-bg-neutral-100 tw-py-11 tw-px-5 tw-h-screen ">
          <Sidebar />
        </div>
        <div className="md:tw-py-6 md:tw-px-12 tw-py-3 tw-px-6 xl:tw-col-span-5">
          <NavigationBar showLogo={false} />
          <div className=' tw-flex tw-items-center tw-mt-60'>
            <div className=" tw-flex tw-flex-col tw-gap-3">
              <p className=" tw-p tw-text-red-600 tw-text-4xl">
                Restricted Access
              </p>
              <p className=" tw-p tw-text-lg tw-text-neutral-900">
                Hello {[userCtx.user?.firstName, userCtx.user?.lastName].join(' ')}
              </p>
              <p className=" tw-p tw-text-lg tw-text-neutral-900">
                Access to your line of credit has been restricted pending the
                fulfillment of the contractual terms
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccessFunds