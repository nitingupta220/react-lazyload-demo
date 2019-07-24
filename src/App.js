import React from 'react';
import './App.css';
import data from './data';
import LazyLoad from 'react-lazyload';

const Loading = () => (
	<div>
		<h5>Loading.....</h5>
	</div>
);

const Post = ({ title, id, body }) => (
	<div className="post">
		<h3>{title}</h3>
		<p>{body}</p>
	</div>
);

function App () {
	return (
		<div className="App">
			<div>
				{data.map((post) => (
					<LazyLoad key={post.id} placeholder={<Loading />}>
						<Post key={post.id} {...post} />
					</LazyLoad>
				))}
			</div>
		</div>
	);
}

export default App;
