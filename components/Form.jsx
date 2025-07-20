import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='font-poppins font-semibold text-4xl mt-5 text-left'>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className='font-poppins desc text-left w-full'>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className='w-full mt-6 max-w-2xl flex flex-col gap-7'
      >
        <label className='flex flex-col'>
          <span className='font-poppins font-semibold text-base text-gray-700 mb-2'>
            Your AI Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea'
          />
        </label>

        <label className='flex flex-col'>
          <span className='font-poppins font-semibold text-base text-gray-700 mb-2'>
            Field of Prompt{" "}
            <span className='font-normal text-gray-500'>
              (#product, #webdevelopment, #idea, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input'
          />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='cancel_btn'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='submit_btn_soft'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;