import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries for next week', status: 'In progress', createdAt: new Date().toLocaleString(), finishedAt: null },
    { id: 2, title: 'Renew car insurance', status: 'In progress', createdAt: new Date().toLocaleString(), finishedAt: null },
    { id: 3, title: 'Sign up for online course', status: 'In progress', createdAt: new Date().toLocaleString(), finishedAt: null },
  ]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;

    setTasks([
      ...tasks,
      { id: tasks.length + 1, title: newTask, status: 'In progress', createdAt: new Date().toLocaleString(), finishedAt: null },
    ]);
    setNewTask('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleMarkFinished = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: 'Finished', finishedAt: new Date().toLocaleString() }
          : task
      )
    );
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div className="card rounded-3">
              <div className="card-body p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>

                <form
                  className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2"
                  onSubmit={handleAddTask}
                >
                  <div className="col-12">
                    <div className="form-outline">
                      <input
                        type="text"
                        id="form1"
                        className="form-control"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form1">
                        Enter a task here
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>

                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={() => console.log(tasks)} // You can replace this with your logic to fetch tasks
                    >
                      Get tasks
                    </button>
                  </div>
                </form>

                <table className="table mb-4">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Status</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Finished At</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((task) => (
                      <tr key={task.id}>
                        <th scope="row">{task.id}</th>
                        <td>{task.title}</td>
                        <td>{task.status}</td>
                        <td>{task.createdAt}</td>
                        <td>{task.finishedAt ? task.finishedAt : '-'}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteTask(task.id)}
                          >
                            Delete
                          </button>
                          {task.status === 'In progress' && (
                            <button
                              className="btn btn-success ms-1"
                              onClick={() => handleMarkFinished(task.id)}
                            >
                              Finished
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodoApp;
