# Development Checklist

**Quick Reference** - For detailed requirements, see [REQUIREMENTS.md](./REQUIREMENTS.md)

Use this checklist before submitting any code changes.

---

## Pre-Development

- [ ] Problem statement is clear
- [ ] Target users defined
- [ ] MVP scope defined
- [ ] Tech stack confirmed
- [ ] Compliance requirements confirmed (GDPR, WCAG)

---

## Architecture & Code Quality

- [ ] Follows existing project structure
- [ ] No circular dependencies
- [ ] Consistent naming conventions
- [ ] Configuration via environment variables only
- [ ] No new libraries without approval

---

## Security

- [ ] Backend-enforced authorization
- [ ] Input validation server-side
- [ ] No secrets in code
- [ ] Rate limiting considered
- [ ] CSRF protection if needed
- [ ] Audit logs for sensitive actions

---

## GDPR & Privacy

- [ ] Data minimization applied
- [ ] User rights supported (access, delete, export)
- [ ] No PII in logs
- [ ] Retention policies considered
- [ ] Consent stored if required

---

## Performance

- [ ] No unbounded queries
- [ ] Indexes verified
- [ ] N+1 queries avoided
- [ ] Code splitting enabled
- [ ] Images optimized
- [ ] Minimal JS payload

---

## Mobile & Responsive

- [ ] Mobile-first approach
- [ ] Touch targets ≥ 44x44px
- [ ] Tested on real devices
- [ ] No desktop-only assumptions

---

## Accessibility (WCAG 2.1 AA)

- [ ] Keyboard navigation works
- [ ] Focus management proper
- [ ] Semantic HTML used
- [ ] All inputs have labels
- [ ] Color contrast ≥ 4.5:1
- [ ] Errors announced properly

---

## Error Handling

- [ ] Explicit error handling
- [ ] No swallowed exceptions
- [ ] User-friendly messages
- [ ] No technical details leaked
- [ ] Structured logging

---

## Testing

- [ ] Unit tests for critical logic
- [ ] Integration tests for APIs
- [ ] E2E tests for core flows
- [ ] All tests passing
- [ ] No skipped tests

---

## Documentation

- [ ] Code is self-documenting
- [ ] Complex logic commented
- [ ] API contracts documented
- [ ] Decisions documented

---

## Final Check

- [ ] All requirements satisfied
- [ ] Risks identified
- [ ] Edge cases handled
- [ ] Code reviewed
- [ ] Linting passes
- [ ] Type checking passes

---

**Remember: You are a quality gate, not just a code generator.**

