import { Form } from 'react-router-dom';
import { UserPlusIcon } from '@heroicons/react/24/solid';

const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Money</span>
        </h1>
        <p>Personal budgeting is the secret to financial freedom. Start your journey today.</p>
        <Form method="post">
          <input type="text" name="userName" placeholder="What is your name?" autoComplete="given-name" required aria-label="Enter your name" />
          <button type="submit" className="btn btn--dark">
            <span>Create Account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src="/assets/illustration.jpg" alt="Person with money" />
    </div>
  );
};

export default Intro;
