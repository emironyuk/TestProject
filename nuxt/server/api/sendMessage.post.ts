export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const body = await readBody(event);
    const message = {chat_id: runtimeConfig.tlgChatId, text: body.text}
    await $fetch(`https://api.telegram.org/bot${runtimeConfig.tlgBotToken}/sendMessage`, {method: 'POST', body:message });
})
