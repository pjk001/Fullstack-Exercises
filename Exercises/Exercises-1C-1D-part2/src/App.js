import { useState } from 'react'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(7))

  const nextLine = () => {
    setSelected(Math.floor(Math.random() * 7))
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const greatestVotes = votes.indexOf(Math.max(...votes))

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]



  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <VoteButton vote={vote} text='vote' />
      <AnecdoteButton randomLine={nextLine} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      {anecdotes[greatestVotes]}
      <br />
      has {votes[greatestVotes]} votes
    </div>
  )
}

const AnecdoteButton = ({randomLine, text}) => (
  <button onClick={randomLine}>
    {text}
  </button>
)

const VoteButton = ({vote, text}) => (
  <button onClick={vote}>
    {text}
  </button>
)





export default App;
