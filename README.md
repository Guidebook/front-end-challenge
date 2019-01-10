# Front end take home challenge

1. [Overview](#overview)
2. [How to work on this challenge](#how-to-work-on-this-challenge)
2. [Time](#time)
3. [Current code](#current-code)
4. [Task](#task)

## Overview

The objective of this challenge is to give your interviewer a glimpse into your experience with React and to present you with a common code reorganization problem.

## How to work on this challenge

1. Run `git clone https://github.com/Guidebook/front-end-challenge`
2. Modify the code locally
3. Send this to the hiring manager either as a link to a Github repo hosted on your account or as a zip file with the repo contents.

## Time

We have given you a task that will take you at least an hour. Although working on this challenge for longer than an hour is fine, we respect your time and will not expect you to. If you find yourself having spent an hour working on this and have not completed it, you may **stop working on the code and write some notes on what you were trying to accomplish in the hour and what you would have liked to do next.** We will not evaluate how much you accomplished, but would like to understand what your thought process was and what you spent that time working on.

## Current code

The initial state of this project presents you with two forms which use a common `profile.js` component. One of the forms is blank, representing a 'New profile' state, and the other is prefilled with data, representing an 'Edit profile' state.

All form fields are required, and submitting with any blank fields will result in a red message at the bottom of the form as well as a red border around the respective field. The message and red border will not disappear until you have filled in the required data and clicked submit again. If you have filled in all required data and submitted successfully, you will see a "Form submitted!" message, and the console will log the form's payload.

## Task

We are giving you three primary tasks:
1. Use only controlled inputs for the profile form
2. Separate the profile render function into new components where it makes sense
3. Document what you completed along with what you were planning on doing next in a separate markdown file.

Below are some helpful notes:

* After converting the form to use only controlled components, there should be no usage of refs remaining in the code.
* When DRYing up the render method of `profile.js` into clean reusable components, prefer pure components to stateful ones.
* Ideally the presence validation would be reused for all form fields.
* When documenting what you did and what you'd do next, try to write the reasons for your choices so that we can follow your thought process.
* Using only controlled inputs for the profile form will require you to move the form state from the DOM to the profile form.
* If you are able to complete everything in one hour, running your code should be functionally identical to the original project.
