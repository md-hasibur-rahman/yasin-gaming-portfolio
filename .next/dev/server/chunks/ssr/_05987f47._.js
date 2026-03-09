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
"[project]/src/app/admin/actions/friends.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40839cd6df2fd489ce5c7e5ec3a35088b5103115c5":"updateFriendAction","40a7d29f827d8657ca419db3733673ec3f4bb90d0a":"deleteFriendAction","40d481f0ad5dab91733e7ef324aaddfd49f3883c18":"updateFriendLinkAction","40d5f762ad10861b6d28c2e6efd5099f4a4e8d22cc":"deleteFriendLinkAction","40e0b39cb35f344744b7c1ba0eb56462215169264d":"createFriendAction","40ea3cf802fa8c84a7c466766f22213e6dd1993ca4":"createFriendLinkAction"},"",""] */ __turbopack_context__.s([
    "createFriendAction",
    ()=>createFriendAction,
    "createFriendLinkAction",
    ()=>createFriendLinkAction,
    "deleteFriendAction",
    ()=>deleteFriendAction,
    "deleteFriendLinkAction",
    ()=>deleteFriendLinkAction,
    "updateFriendAction",
    ()=>updateFriendAction,
    "updateFriendLinkAction",
    ()=>updateFriendLinkAction
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
async function createFriendAction(formData) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAdmin"])();
    if (!admin) return {
        ok: false,
        error: "Not authorized"
    };
    const payload = {
        name: String(formData.get("name") || ""),
        image_url: String(formData.get("image_url") || ""),
        role: String(formData.get("role") || ""),
        description: String(formData.get("description") || ""),
        created_at: new Date().toISOString()
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("friends").add(payload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/friends");
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
async function updateFriendAction(formData) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAdmin"])();
    if (!admin) return {
        ok: false,
        error: "Not authorized"
    };
    const id = String(formData.get("id") || "");
    const updates = {
        name: String(formData.get("name") || ""),
        image_url: String(formData.get("image_url") || ""),
        role: String(formData.get("role") || ""),
        description: String(formData.get("description") || ""),
        updated_at: new Date().toISOString()
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("friends").doc(id).update(updates);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/friends");
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
async function deleteFriendAction(formData) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAdmin"])();
    if (!admin) return {
        ok: false,
        error: "Not authorized"
    };
    const id = String(formData.get("id") || "");
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("friends").doc(id).delete();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/friends");
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
async function createFriendLinkAction(formData) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAdmin"])();
    if (!admin) return {
        ok: false,
        error: "Not authorized"
    };
    const payload = {
        friend_id: String(formData.get("friend_id") || ""),
        icon_url: String(formData.get("icon_url") || ""),
        url: String(formData.get("url") || ""),
        position: Number(formData.get("position") || 0),
        created_at: new Date().toISOString()
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("friend_social_links").add(payload);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/friends");
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
async function updateFriendLinkAction(formData) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAdmin"])();
    if (!admin) return {
        ok: false,
        error: "Not authorized"
    };
    const id = String(formData.get("id") || "");
    const updates = {
        icon_url: String(formData.get("icon_url") || ""),
        url: String(formData.get("url") || ""),
        position: Number(formData.get("position") || 0),
        updated_at: new Date().toISOString()
    };
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("friend_social_links").doc(id).update(updates);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/friends");
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
async function deleteFriendLinkAction(formData) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAdmin"])();
    if (!admin) return {
        ok: false,
        error: "Not authorized"
    };
    const id = String(formData.get("id") || "");
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2f$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adminDb"].collection("friend_social_links").doc(id).delete();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/friends");
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
    createFriendAction,
    updateFriendAction,
    deleteFriendAction,
    createFriendLinkAction,
    updateFriendLinkAction,
    deleteFriendLinkAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createFriendAction, "40e0b39cb35f344744b7c1ba0eb56462215169264d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateFriendAction, "40839cd6df2fd489ce5c7e5ec3a35088b5103115c5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteFriendAction, "40a7d29f827d8657ca419db3733673ec3f4bb90d0a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createFriendLinkAction, "40ea3cf802fa8c84a7c466766f22213e6dd1993ca4", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateFriendLinkAction, "40d481f0ad5dab91733e7ef324aaddfd49f3883c18", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteFriendLinkAction, "40d5f762ad10861b6d28c2e6efd5099f4a4e8d22cc", null);
}),
"[project]/.next-internal/server/app/admin/friends/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/actions/friends.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$friends$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/actions/friends.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/admin/friends/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/actions/friends.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40839cd6df2fd489ce5c7e5ec3a35088b5103115c5",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$friends$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateFriendAction"],
    "40a7d29f827d8657ca419db3733673ec3f4bb90d0a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$friends$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteFriendAction"],
    "40d481f0ad5dab91733e7ef324aaddfd49f3883c18",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$friends$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateFriendLinkAction"],
    "40d5f762ad10861b6d28c2e6efd5099f4a4e8d22cc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$friends$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteFriendLinkAction"],
    "40e0b39cb35f344744b7c1ba0eb56462215169264d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$friends$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFriendAction"],
    "40ea3cf802fa8c84a7c466766f22213e6dd1993ca4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$friends$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFriendLinkAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f$friends$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$friends$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/friends/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/admin/actions/friends.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$actions$2f$friends$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/actions/friends.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_05987f47._.js.map