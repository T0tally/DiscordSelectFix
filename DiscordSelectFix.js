/**
 * @name DiscordSelectFix
 * @author T0tally
 * @description There is a bug in Discord that prevents users from selecting text in certain situations, such as after pressing the "esc" key, toggling the quickswitcher, or enlarging a photo in a channel where the users don't have permission to write. "EscNoSelectionFix" has been created to solve this issue. To use it, simply press the "esc" key again and the selection functionality will be restored.
 * @version 0.0.1
 */

module.exports = class EscNoSelectionFix {
    handler(e) {
        if (e.key == "Escape")
            document.querySelectorAll('[contenteditable=false]').forEach(el => el.setAttribute("contenteditable", true))
    }
    start() {
        document.addEventListener("keydown", this.handler);
    }
    stop() {
        document.removeEventListener("keydown", this.handler);
    }
}
