
import { actions } from 'astro:actions';
import { createSignal } from 'solid-js';
import { navigate } from 'astro:transitions/client';

function QuestionForm() {
  const [submit, setSubmit] = createSignal(false);
  const [question, setQuestion] = createSignal('');

  const submitQuestion = async (e: Event) => {
    setSubmit(true);
    e.preventDefault();
    const { data, error } = await actions.submitQuestion({ question: question() });
    if(error) {
      console.error(error);
      return;
    }
    setSubmit(false);
    navigate('/success');
  }

  return (
    <form onSubmit={submitQuestion} class="p-6 space-y-6">
      <label for="question" class="text-sm font-medium text-gray-700">Your Question</label>
      <div class="space-y-2">
        <textarea 
          onInput={(e) => setQuestion(e.currentTarget.value)}
          id="question" 
          name="question"
          placeholder="What would you like to ask?" 
          required
          value={question()}
          class="h-40 w-full resize-none border-gray-300 focus:border-gray-500 focus:ring-gray-500" 
        />
      </div>
      <button disabled={submit()} class="w-full bg-gray-800 hover:bg-gray-700 disabled:bg-gray-500 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out" type="submit">
        {
          submit() ? (
            <span>Submitting</span>
          ) :
          <span>Ask</span>
        }
      </button>
    </form>
  )
}

export default QuestionForm;