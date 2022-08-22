import { Link, Route, Routes , useParams} from 'react-router-dom';

const Issues = ({issues, repoId}) => {
  const {id} = useParams();
  const isShownIssues = id === repoId;
  return isShownIssues && (
    <>
      <p>issues : </p>
      {issues.edges.map(({node}) => (
        <ul key={node.id}>
          <li>
            <p>author: {node.author.login}</p>
            <p>title: {node.title}</p>
            <p>state: {node.state}</p>
            {node.stateReason && <p>stateReason: {node.stateReason}</p>}
          </li>
        </ul>
      ))}
    </>
  );
}

const Repositories = ({repositories: {
  nodes
}}) => {
  return (
    nodes.map(({description = 'Empty title', name = '', issues, id}) => (
      <ul key={id}>
        <li>
          {issues.edges.length > 0 && <Link to={`/issues/${id}`}>show issues</Link>}
          <p>name: {name}</p>
          <p>description: {description}</p>
          {issues.edges.length > 0 && (
            <Routes>
              <Route path="/issues/:id" element={<Issues issues={issues} repoId={id}/>}/>
            </Routes>
          )}
        </li>
      </ul>
    ))
  );
}

Repositories.propTypes = {

}

export default Repositories;