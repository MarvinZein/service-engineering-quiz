import { b as private_env } from "../../../../../../chunks/shared-server.js";
import * as deepl from "deepl-node";
const translator = new deepl.Translator(private_env.DEEPL_KEY);
async function POST({ params }) {
  const res = await translator.translateText(decodeURIComponent(params.text), "en", params.target_lang);
  return new Response(JSON.stringify({ translatedText: res.text }), { status: 201 });
}
export {
  POST
};
