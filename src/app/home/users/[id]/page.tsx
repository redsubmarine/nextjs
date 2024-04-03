import { FunctionComponent } from 'react'
import styles from '@/app/ui/home/users/singleUser/singleUser.module.css'
import Image from 'next/image'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import { fetchUser } from '@/app/lib/data'
import { updateUser } from '@/app/lib/actions'

interface SingleUserPageProps {
  params: Params
}

const SingleUserPage: FunctionComponent<SingleUserPageProps> = async ({ params }) => {
  const { id } = params
  const user = await fetchUser(id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.image || '/noavatar.png'} alt="avatar" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value="true" selected={user.isAdmin}>
              Yes
            </option>
            <option value="false" selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive" defaultValue={user.isActive}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage
