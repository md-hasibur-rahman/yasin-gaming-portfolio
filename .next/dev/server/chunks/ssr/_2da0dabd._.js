module.exports = [
"[project]/src/lib/supabase/server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSupabaseServerClient",
    ()=>getSupabaseServerClient,
    "getSupabaseServerClientOptional",
    ()=>getSupabaseServerClientOptional
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createServerClient.js [app-rsc] (ecmascript)");
;
;
async function getSupabaseServerClient() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(("TURBOPACK compile-time value", "https://rticcmmhtpuqluwvvuwt.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0aWNjbW1odHB1cWx1d3Z2dXd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxMDk1NDAsImV4cCI6MjA4MjY4NTU0MH0.gocwnKZ55qC658jfTm7K3fB7SmG0xMHaBmomVa_BNF0"), {
        cookies: {
            get (name) {
                return cookieStore.get(name)?.value;
            },
            set (name, value, options) {
                try {
                    cookieStore.set({
                        name,
                        value,
                        ...options
                    });
                } catch  {
                // noop: setting cookies can fail in some server contexts
                }
            },
            remove (name, options) {
                try {
                    cookieStore.set({
                        name,
                        value: "",
                        expires: new Date(0),
                        ...options
                    });
                } catch  {
                // noop
                }
            }
        }
    });
}
async function getSupabaseServerClientOptional() {
    const url = ("TURBOPACK compile-time value", "https://rticcmmhtpuqluwvvuwt.supabase.co");
    const anon = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ0aWNjbW1odHB1cWx1d3Z2dXd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxMDk1NDAsImV4cCI6MjA4MjY4NTU0MH0.gocwnKZ55qC658jfTm7K3fB7SmG0xMHaBmomVa_BNF0");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createServerClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerClient"])(url, anon, {
        cookies: {
            get (name) {
                return cookieStore.get(name)?.value;
            },
            set (name, value, options) {
                try {
                    cookieStore.set({
                        name,
                        value,
                        ...options
                    });
                } catch  {}
            },
            remove (name, options) {
                try {
                    cookieStore.set({
                        name,
                        value: "",
                        expires: new Date(0),
                        ...options
                    });
                } catch  {}
            }
        }
    });
}
}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAllFriendLinks",
    ()=>fetchAllFriendLinks,
    "fetchEducation",
    ()=>fetchEducation,
    "fetchFriendLinks",
    ()=>fetchFriendLinks,
    "fetchFriends",
    ()=>fetchFriends,
    "fetchGameSections",
    ()=>fetchGameSections,
    "fetchGames",
    ()=>fetchGames,
    "fetchMessages",
    ()=>fetchMessages,
    "fetchProfile",
    ()=>fetchProfile,
    "fetchSocialLinks",
    ()=>fetchSocialLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-rsc] (ecmascript)");
;
async function fetchProfile() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseServerClientOptional"])();
    if (!supabase) return null;
    const { data } = await supabase.from("profile").select("*").limit(1).maybeSingle();
    return data ?? null;
}
async function fetchEducation() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseServerClientOptional"])();
    if (!supabase) return [];
    const { data } = await supabase.from("education").select("*").order("created_at");
    return data ?? [];
}
async function fetchSocialLinks(profileId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseServerClientOptional"])();
    if (!supabase) return [];
    let query = supabase.from("social_links").select("*").order("position");
    if (profileId) query = query.eq("profile_id", profileId);
    const { data } = await query;
    return data ?? [];
}
async function fetchGameSections() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseServerClientOptional"])();
    if (!supabase) return [];
    const { data } = await supabase.from("game_sections").select("*").order("position");
    return data ?? [];
}
async function fetchGames() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseServerClientOptional"])();
    if (!supabase) return [];
    const { data } = await supabase.from("games").select("*").order("created_at");
    return data ?? [];
}
async function fetchFriends() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseServerClientOptional"])();
    if (!supabase) return [];
    const { data } = await supabase.from("friends").select("*").order("created_at", {
        ascending: true
    });
    return data ?? [];
}
async function fetchFriendLinks(friendId) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseServerClientOptional"])();
    if (!supabase) return [];
    const { data } = await supabase.from("friend_social_links").select("*").eq("friend_id", friendId).order("position");
    return data ?? [];
}
async function fetchAllFriendLinks() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseServerClientOptional"])();
    if (!supabase) return [];
    const { data } = await supabase.from("friend_social_links").select("*").order("position");
    return data ?? [];
}
async function fetchMessages() {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseServerClientOptional"])();
    if (!supabase) return [];
    const { data } = await supabase.from("messages").select("*").order("created_at", {
        ascending: false
    });
    return data ?? [];
}
}),
"[project]/src/app/admin/actions/social-links.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4021a6cc417cde004409d6eced0d7124780cb09af4":"updateSocialLinkAction","40c402e8411b4a5b2bdd81f7b93c51d61fb12d5a7b":"createSocialLinkAction","40c793d30dfcfa3d6abceabd9eabc2dc2065beb206":"deleteSocialLinkAction"},"",""] */ __turbopack_context__.s([
    "createSocialLinkAction",
    ()=>createSocialLinkAction,
    "deleteSocialLinkAction",
    ()=>deleteSocialLinkAction,
    "updateSocialLinkAction",
    ()=>updateSocialLinkAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function createSocialLinkAction(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseServerClient"])();
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) return {
        ok: false,
        error: "Not authenticated"
    };
    const profile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchProfile"])();
    if (!profile) return {
        ok: false,
        error: "No profile"
    };
    const payload = {
        profile_id: profile.id,
        platform: String(formData.get("platform") || ""),
        icon_url: String(formData.get("icon_url") || ""),
        url: String(formData.get("url") || ""),
        position: Number(formData.get("position") || 0)
    };
    const { error } = await supabase.from("social_links").insert(payload);
    if (error) return {
        ok: false,
        error: error.message
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/social-links");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    return {
        ok: true
    };
}
async function updateSocialLinkAction(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseServerClient"])();
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) return {
        ok: false,
        error: "Not authenticated"
    };
    const id = String(formData.get("id") || "");
    const updates = {
        platform: String(formData.get("platform") || ""),
        icon_url: String(formData.get("icon_url") || ""),
        url: String(formData.get("url") || ""),
        position: Number(formData.get("position") || 0)
    };
    const { error } = await supabase.from("social_links").update(updates).eq("id", id);
    if (error) return {
        ok: false,
        error: error.message
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/social-links");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    return {
        ok: true
    };
}
async function deleteSocialLinkAction(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseServerClient"])();
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) return {
        ok: false,
        error: "Not authenticated"
    };
    const id = String(formData.get("id") || "");
    const { error } = await supabase.from("social_links").delete().eq("id", id);
    if (error) return {
        ok: false,
        error: error.message
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/social-links");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    return {
        ok: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createSocialLinkAction,
    updateSocialLinkAction,
    deleteSocialLinkAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createSocialLinkAction, "40c402e8411b4a5b2bdd81f7b93c51d61fb12d5a7b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateSocialLinkAction, "4021a6cc417cde004409d6eced0d7124780cb09af4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteSocialLinkAction, "40c793d30dfcfa3d6abceabd9eabc2dc2065beb206", null);
}),
"[project]/.next-internal/server/app/admin/social-links/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/actions/social-links.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$social$2d$links$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/actions/social-links.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/admin/social-links/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/actions/social-links.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "4021a6cc417cde004409d6eced0d7124780cb09af4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$social$2d$links$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateSocialLinkAction"],
    "40c402e8411b4a5b2bdd81f7b93c51d61fb12d5a7b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$social$2d$links$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSocialLinkAction"],
    "40c793d30dfcfa3d6abceabd9eabc2dc2065beb206",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$social$2d$links$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteSocialLinkAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$social$2d$links$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$social$2d$links$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/social-links/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/admin/actions/social-links.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$social$2d$links$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/actions/social-links.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_2da0dabd._.js.map