import { c as create_ssr_component, e as escape, a as subscribe, h as createEventDispatcher, f as each, v as validate_component } from "../../../chunks/index2.js";
import { t as translationToggle, s as selectedLanguage } from "../../../chunks/stores.js";
const ArrowIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>`;
});
const QuestionRectangle_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".blinking.svelte-saan9c{animation:svelte-saan9c-blinker 4s linear infinite}@keyframes svelte-saan9c-blinker{100%{--tw-bg-opacity:1;background-color:hsl(var(--b3) / var(--tw-bg-opacity))}}",
  map: null
};
const QuestionRectangle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isCurrentQuestion = false } = $$props;
  let { questionStatus } = $$props;
  let { gameStatus } = $$props;
  let bg = "bg-base-300";
  if ($$props.isCurrentQuestion === void 0 && $$bindings.isCurrentQuestion && isCurrentQuestion !== void 0)
    $$bindings.isCurrentQuestion(isCurrentQuestion);
  if ($$props.questionStatus === void 0 && $$bindings.questionStatus && questionStatus !== void 0)
    $$bindings.questionStatus(questionStatus);
  if ($$props.gameStatus === void 0 && $$bindings.gameStatus && gameStatus !== void 0)
    $$bindings.gameStatus(gameStatus);
  $$result.css.add(css$1);
  {
    {
      if (questionStatus == "unanswered") {
        bg = "bg-neutral";
      } else if (questionStatus == "correct")
        bg = "bg-success";
      else if (questionStatus == "incorrect")
        bg = "bg-error";
    }
  }
  return `<div class="${[
    "h-full aspect-square rounded-full " + escape(bg, true) + " svelte-saan9c",
    (isCurrentQuestion && questionStatus == "unanswered" && gameStatus === "running" ? "blinking" : "") + " " + (isCurrentQuestion && questionStatus == "unanswered" && gameStatus === "running" ? "ring" : "")
  ].join(" ").trim()}"></div>`;
});
const QuestionComponent_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-z9u9kc:hover{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);--tw-ring-opacity:1;--tw-ring-color:hsl(var(--wa) / var(--tw-ring-opacity))\n}",
  map: null
};
const QuestionComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $translationToggle, $$unsubscribe_translationToggle;
  $$unsubscribe_translationToggle = subscribe(translationToggle, (value) => $translationToggle = value);
  let { question } = $$props;
  let { target_lang } = $$props;
  const fragenKuerzel = ["A", "B", "C", "D"];
  let selectedAnswer = null;
  let selectedAnswerIsCorrect = null;
  createEventDispatcher();
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.target_lang === void 0 && $$bindings.target_lang && target_lang !== void 0)
    $$bindings.target_lang(target_lang);
  $$result.css.add(css);
  $$unsubscribe_translationToggle();
  return `<div class="mb-12"><h2 class="text-lg mb-12">${question.textTranslation ? `${escape($translationToggle ? question.textTranslation : question.text)}` : `<span class="loading loading-dots loading-xs"></span>`}</h2>

	<div class="flex flex-col gap-2 w-full">
		${each(question.answers.sort((a, b) => a.text.localeCompare(b.text)), (answer, index) => {
    return `<button ${""} class="${[
      "bg-neutral text-neutral-content px-0 w-full min-w-full h-full grid grid-cols-[3rem_1fr] place-items-center gap-1 rounded-l-lg svelte-z9u9kc",
      (selectedAnswer === answer && selectedAnswerIsCorrect === null ? "bg-warning" : "") + "  " + (selectedAnswer === answer && selectedAnswerIsCorrect === false ? "!bg-error" : "")
    ].join(" ").trim()}"><div class="bg-base-300 text-base-content font-bold text-xl min-h-full rounded-l py-2 min-w-full flex justify-center items-center">${escape(fragenKuerzel[index])}</div>
				<div class="font-normal w-full h-full flex justify-center items-center rounded-r p-2">${$translationToggle ? `${answer.translation === void 0 ? `<span class="loading loading-dots loading-xs"></span>` : `${escape(answer.translation)}`}` : `${escape(answer.text)}`}</div>
			</button>`;
  })}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentQuestion;
  let $selectedLanguage, $$unsubscribe_selectedLanguage;
  $$unsubscribe_selectedLanguage = subscribe(selectedLanguage, (value) => $selectedLanguage = value);
  let { data } = $$props;
  let questions = data.quizQuestions;
  let questionIndex = 0;
  let gameStatus = "running";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  currentQuestion = questions[questionIndex];
  $$unsubscribe_selectedLanguage();
  return `<main class="max-w-screen-sm mx-auto flex justify-center items-center min-h-full w-full"><div class="w-full flex flex-col">${`${validate_component(QuestionComponent, "QuestionComponent").$$render(
    $$result,
    {
      question: currentQuestion,
      target_lang: $selectedLanguage.languageCode
    },
    {},
    {}
  )}`}
		<div class="flex justify-evenly items-center w-full gap-2 h-12">${each(questions, (question) => {
    return `${validate_component(QuestionRectangle, "QuestionRectangle").$$render(
      $$result,
      {
        gameStatus,
        questionStatus: question.status,
        isCurrentQuestion: currentQuestion == question
      },
      {},
      {}
    )}`;
  })}</div>
		<button ${"disabled"} class="${["btn btn-secondary w-full mt-8", ""].join(" ").trim()}">${validate_component(ArrowIcon, "ArrowIcon").$$render($$result, {}, {}, {})}</button></div></main>`;
});
export {
  Page as default
};
