module.exports = [
"[project]/src/lib/firebase/admin.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminAuth",
    ()=>adminAuth,
    "adminDb",
    ()=>adminDb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__ = __turbopack_context__.i("[externals]/firebase-admin [external] (firebase-admin, cjs, [project]/node_modules/firebase-admin)");
;
function parseServiceAccountFromEnv() {
    const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
    if (!raw) return null;
    const trimmed = raw.trim();
    const unwrapped = trimmed.startsWith("'") && trimmed.endsWith("'") || trimmed.startsWith('"') && trimmed.endsWith('"') ? trimmed.slice(1, -1) : trimmed;
    const parsed = JSON.parse(unwrapped);
    if (typeof parsed?.private_key === "string") {
        parsed.private_key = parsed.private_key.replace(/\\n/g, "\n");
    }
    return parsed;
}
const serviceAccount = parseServiceAccountFromEnv();
if (!__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["apps"].length) {
    if (serviceAccount) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["initializeApp"]({
            credential: __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["credential"].cert(serviceAccount),
            projectId: ("TURBOPACK compile-time value", "yasin-586e3")
        });
    } else {
        // Fallback for development if service account is not provided yet
        // This will only work if running in an environment with default credentials
        __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["initializeApp"]({
            projectId: ("TURBOPACK compile-time value", "yasin-586e3")
        });
    }
}
const adminAuth = __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["auth"]();
const adminDb = __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2d$admin__$5b$external$5d$__$28$firebase$2d$admin$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$firebase$2d$admin$29$__["firestore"]();
;
}),
"[project]/src/lib/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCurrentUser",
    ()=>getCurrentUser,
    "isAdmin",
    ()=>isAdmin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
async function getCurrentUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const session = cookieStore.get("__session")?.value;
    if (!session) return null;
    try {
        const decodedToken = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminAuth"].verifySessionCookie(session, true);
        return {
            id: decodedToken.uid,
            email: decodedToken.email,
            user_metadata: {
                avatar_url: decodedToken.picture,
                full_name: decodedToken.name
            }
        };
    } catch (error) {
        return null;
    }
}
async function isAdmin() {
    const user = await getCurrentUser();
    if (!user) return false;
    const MAIN_ADMIN = "animeandmanga1810@gmail.com";
    const userEmail = (user.email || "").toLowerCase();
    // Rule 1: Fixed main admin
    if (userEmail === MAIN_ADMIN) return true;
    // Rule 2: Extra admins from Firestore
    try {
        const adminDoc = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("admins").doc(userEmail).get();
        return adminDoc.exists;
    } catch (error) {
        return false;
    }
}
}),
"[project]/src/app/admin/actions/education.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"406fb58eff9a744a8f3e6e97f485249031585edca3":"createEducationAction","40a90a9742f70133ea5073935443e326e14baaa19e":"deleteEducationAction","40fc6beec089bdb67693dac43824e8f944f61682f8":"updateEducationAction"},"",""] */ __turbopack_context__.s([
    "createEducationAction",
    ()=>createEducationAction,
    "deleteEducationAction",
    ()=>deleteEducationAction,
    "updateEducationAction",
    ()=>updateEducationAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase/admin.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function createEducationAction(formData) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAdmin"])();
    if (!admin) return {
        ok: false,
        error: "Not authorized"
    };
    const payload = {
        institution_name: String(formData.get("institution_name") || ""),
        level: String(formData.get("level") || ""),
        description: String(formData.get("description") || ""),
        dress_image_url: String(formData.get("dress_image_url") || ""),
        created_at: new Date().toISOString()
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("education").add(payload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/education");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            ok: true
        };
    } catch (error) {
        return {
            ok: false,
            error: error.message
        };
    }
}
async function updateEducationAction(formData) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAdmin"])();
    if (!admin) return {
        ok: false,
        error: "Not authorized"
    };
    const id = String(formData.get("id") || "");
    const updates = {
        institution_name: String(formData.get("institution_name") || ""),
        level: String(formData.get("level") || ""),
        description: String(formData.get("description") || ""),
        dress_image_url: String(formData.get("dress_image_url") || ""),
        updated_at: new Date().toISOString()
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("education").doc(id).update(updates);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/education");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            ok: true
        };
    } catch (error) {
        return {
            ok: false,
            error: error.message
        };
    }
}
async function deleteEducationAction(formData) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAdmin"])();
    if (!admin) return {
        ok: false,
        error: "Not authorized"
    };
    const id = String(formData.get("id") || "");
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("education").doc(id).delete();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/education");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            ok: true
        };
    } catch (error) {
        return {
            ok: false,
            error: error.message
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createEducationAction,
    updateEducationAction,
    deleteEducationAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEducationAction, "406fb58eff9a744a8f3e6e97f485249031585edca3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateEducationAction, "40fc6beec089bdb67693dac43824e8f944f61682f8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEducationAction, "40a90a9742f70133ea5073935443e326e14baaa19e", null);
}),
"[project]/.next-internal/server/app/admin/education/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/actions/education.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$education$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/actions/education.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/admin/education/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/actions/education.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "406fb58eff9a744a8f3e6e97f485249031585edca3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$education$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEducationAction"],
    "40a90a9742f70133ea5073935443e326e14baaa19e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$education$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEducationAction"],
    "40fc6beec089bdb67693dac43824e8f944f61682f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$education$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateEducationAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$education$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$education$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/education/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/admin/actions/education.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$education$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/actions/education.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_15ca2bb3._.js.map