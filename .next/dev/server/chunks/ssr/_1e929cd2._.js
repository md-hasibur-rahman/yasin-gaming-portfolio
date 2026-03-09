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
"[project]/src/app/admin/actions/profile.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ce2c7c00492a5367e172f023aae63759b53d49c4":"updateProfileAction"},"",""] */ __turbopack_context__.s([
    "updateProfileAction",
    ()=>updateProfileAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function updateProfileAction(formData) {
    const supabase = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSupabaseServerClient"])();
    const { data: userData } = await supabase.auth.getUser();
    const user = userData.user;
    if (!user) return {
        ok: false,
        error: "Not authenticated"
    };
    const updates = {
        full_name: String(formData.get("full_name") || ""),
        gamer_name: String(formData.get("gamer_name") || ""),
        gamer_title: String(formData.get("gamer_title") || ""),
        bio: String(formData.get("bio") || ""),
        country: String(formData.get("country") || ""),
        profile_image_url: String(formData.get("profile_image_url") || ""),
        age: formData.get("age") ? Number(formData.get("age")) : null,
        show_personal: String(formData.get("show_personal") || "true") === "true",
        show_games: String(formData.get("show_games") || "true") === "true",
        show_friends: String(formData.get("show_friends") || "true") === "true",
        show_messages: String(formData.get("show_messages") || "true") === "true"
    };
    const { data: existing } = await supabase.from("profile").select("id").limit(1).maybeSingle();
    if (existing?.id) {
        const { error } = await supabase.from("profile").update(updates).eq("id", existing.id);
        if (error) return {
            ok: false,
            error: error.message
        };
    } else {
        const { error } = await supabase.from("profile").insert({
            ...updates,
            admin_user_id: user.id
        });
        if (error) return {
            ok: false,
            error: error.message
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    return {
        ok: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateProfileAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProfileAction, "40ce2c7c00492a5367e172f023aae63759b53d49c4", null);
}),
"[project]/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/actions/profile.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/actions/profile.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/actions/profile.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40ce2c7c00492a5367e172f023aae63759b53d49c4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProfileAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/admin/actions/profile.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/actions/profile.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_1e929cd2._.js.map