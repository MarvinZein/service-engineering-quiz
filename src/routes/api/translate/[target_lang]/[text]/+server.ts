import { env } from "$env/dynamic/private";
import * as deepl from 'deepl-node';

const translator = new deepl.Translator(env.DEEPL_KEY)

export async function POST({ params }) {
  const res = await translator.translateText(decodeURIComponent(params.text), 'en', params.target_lang as deepl.TargetLanguageCode)
  return new Response(JSON.stringify({ translatedText: res.text }), { status: 201 })
}
