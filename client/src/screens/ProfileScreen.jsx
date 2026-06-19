import { useGetTaskQuery } from "../slices/taskApiSlice";
import { useGetUserProfileQuery } from "../slices/userApiSlice";

const ProfileScreen = () => {
  const { data: user = {}, isLoading, isError } = useGetUserProfileQuery();
  const { data: { tasks = [] } = {} } = useGetTaskQuery(); //destructure the array of tasks { tasks = [] } then destructure task to get each object { tasks = [] } ={} }
  return (
    <div>
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>

      <div>
        {tasks.map((element) => (
          <div key={element._id}>
            <h1>{element.title}</h1>
            <h1>{element.description}</h1>
            <h1>{element.priority}</h1>
            <h1>{element.status}</h1>
            <h1>{element.dueDate}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileScreen;
