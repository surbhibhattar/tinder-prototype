function isAMatch(caller_activity_obj, callee_activity_obj) {
  return callee_activity_obj.right_swiped.includes(caller_activity_obj.user_id);
}
